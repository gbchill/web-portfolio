'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const gradientOffsetsRef = useRef<Array<{ xOffset: number; yOffset: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Initialize random gradient offsets on mount
    if (gradientOffsetsRef.current.length === 0) {
      gradientOffsetsRef.current = [
        { xOffset: Math.random() * 0.3 - 0.15, yOffset: Math.random() * 0.3 - 0.15 },
        { xOffset: Math.random() * 0.3 - 0.15, yOffset: Math.random() * 0.3 - 0.15 },
        { xOffset: Math.random() * 0.3 - 0.15, yOffset: Math.random() * 0.3 - 0.15 },
        { xOffset: Math.random() * 0.3 - 0.15, yOffset: Math.random() * 0.3 - 0.15 },
        { xOffset: Math.random() * 0.3 - 0.15, yOffset: Math.random() * 0.3 - 0.15 },
      ];
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 0.005;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Draw animated mesh gradient
      drawMeshGradient(ctx, canvas.width, canvas.height);


      // Update and draw particles
      drawParticleNetwork(ctx, canvas.width, canvas.height);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Mesh gradient effect
    const drawMeshGradient = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const isDark = theme === 'dark';
      const time = timeRef.current;
      const offsets = gradientOffsetsRef.current;

      // Create multiple gradient points that move with random starting positions
      const gradients = [
        {
          x: width * (0.15 + offsets[0].xOffset) + Math.sin(time * 0.5) * 150,
          y: height * (0.2 + offsets[0].yOffset) + Math.cos(time * 0.3) * 100,
          color: isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(167, 139, 250, 0.35)',
          radius: 400,
        },
        {
          x: width * (0.85 + offsets[1].xOffset) + Math.cos(time * 0.7) * 120,
          y: height * (0.7 + offsets[1].yOffset) + Math.sin(time * 0.5) * 80,
          color: isDark ? 'rgba(59, 130, 246, 0.22)' : 'rgba(96, 165, 250, 0.32)',
          radius: 450,
        },
        {
          x: width * (0.5 + offsets[2].xOffset) + Math.sin(time * 0.4) * 100,
          y: height * (0.5 + offsets[2].yOffset) + Math.cos(time * 0.6) * 120,
          color: isDark ? 'rgba(168, 85, 247, 0.2)' : 'rgba(192, 132, 252, 0.3)',
          radius: 380,
        },
        {
          x: width * (0.25 + offsets[3].xOffset) + Math.cos(time * 0.6) * 130,
          y: height * (0.85 + offsets[3].yOffset) + Math.sin(time * 0.4) * 90,
          color: isDark ? 'rgba(147, 51, 234, 0.2)' : 'rgba(192, 132, 252, 0.32)',
          radius: 420,
        },
        {
          x: width * (0.75 + offsets[4].xOffset) + Math.sin(time * 0.55) * 140,
          y: height * (0.15 + offsets[4].yOffset) + Math.cos(time * 0.45) * 110,
          color: isDark ? 'rgba(99, 102, 241, 0.23)' : 'rgba(129, 140, 248, 0.33)',
          radius: 390,
        },
      ];

      gradients.forEach(({ x, y, color, radius }) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Apply subtle blur effect
      ctx.filter = 'blur(60px)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';
    };

    // Aurora wave effect
    const drawAuroraWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const isDark = theme === 'dark';
      const time = timeRef.current;

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();

        const amplitude = 80 + i * 20;
        const frequency = 0.002 + i * 0.0003;
        const phase = time + i * 1.5;
        const yOffset = height * (0.2 + i * 0.3);

        ctx.moveTo(0, yOffset);

        for (let x = 0; x <= width; x += 5) {
          const y = yOffset +
            Math.sin(x * frequency + phase) * amplitude +
            Math.sin(x * frequency * 2 + phase * 1.5) * (amplitude * 0.5) +
            Math.cos(x * frequency * 0.5 + phase * 0.8) * (amplitude * 0.3);

          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, yOffset + amplitude);

        if (isDark) {
          const colors = [
            'rgba(139, 92, 246, 0.08)',
            'rgba(59, 130, 246, 0.1)',
            'rgba(168, 85, 247, 0.08)',
          ];
          gradient.addColorStop(0, colors[i]);
          gradient.addColorStop(0.5, colors[i].replace(/0\.\d+/, '0.15'));
          gradient.addColorStop(1, colors[i]);
        } else {
          const colors = [
            'rgba(139, 92, 246, 0.06)',
            'rgba(59, 130, 246, 0.08)',
            'rgba(168, 85, 247, 0.06)',
          ];
          gradient.addColorStop(0, colors[i]);
          gradient.addColorStop(0.5, colors[i].replace(/0\.\d+/, '0.12'));
          gradient.addColorStop(1, colors[i]);
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 40 + i * 20;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.closePath();
      }
    };

    // Particle network effect
    const drawParticleNetwork = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const isDark = theme === 'dark';
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update particles
      particles.forEach((particle) => {
        // Mouse interaction (gentle push)
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.02;
          particle.vy -= (dy / distance) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with smooth wrapping
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Random movement
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Speed limit
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2;
          particle.vy = (particle.vy / speed) * 2;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(167, 139, 250, 0.7)' : 'rgba(139, 92, 246, 0.6)';
        ctx.fill();

        // Add subtle glow effect
        ctx.shadowBlur = 4;
        ctx.shadowColor = isDark ? 'rgba(167, 139, 250, 0.5)' : 'rgba(139, 92, 246, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark
              ? `rgba(96, 165, 250, ${opacity})`
              : `rgba(59, 130, 246, ${opacity * 0.75})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8, zIndex: -20 }}
    />
  );
};

export default DynamicBackground;

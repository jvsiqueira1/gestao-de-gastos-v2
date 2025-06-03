"use client"
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import  Link  from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, PieChart, BarChart3, Shield, Clock, Smartphone } from 'lucide-react';


export default function Home() {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const els = containerRef.current.querySelectorAll('.parallax-element');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        els.forEach(el => {
          const speed = parseFloat((el as HTMLElement).dataset.speed || '0');
          const xOffset = (x - 0.5) * speed;
          const yOffset = (y - 0.5) * speed;
          (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    const features = [
      {
        icon: TrendingUp,
        title: 'Controle Inteligente',
        description: 'Monitore suas receitas e despesas com análises detalhadas e insights automáticos.'
      },
      {
        icon: PieChart,
        title: 'Relatórios Visuais',
        description: 'Visualize seus dados financeiros através de gráficos interativos e relatórios personalizados.'
      },
      {
        icon: Shield,
        title: 'Segurança Total',
        description: 'Seus dados estão protegidos com criptografia de ponta e backup automático.'
      },
      {
        icon: Clock,
        title: 'Tempo Real',
        description: 'Atualizações instantâneas e sincronização em todos os seus dispositivos.'
      },
      {
        icon: Smartphone,
        title: 'Mobile First',
        description: 'Interface responsiva que funciona perfeitamente em qualquer dispositivo.'
      },
      {
        icon: BarChart3,
        title: 'Analytics Avançado',
        description: 'Previsões e tendências baseadas em seus padrões de gastos.'
      }
    ];
  
    const testimonials = [
      {
        name: 'Maria Silva',
        role: 'Empresária',
        content: 'Revolucionou como controlo minhas finanças. Agora tenho visibilidade total dos meus gastos.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b522?w=64&h=64&fit=crop&crop=face'
      },
      {
        name: 'João Santos',
        role: 'Freelancer',
        content: 'Interface intuitiva e relatórios detalhados. Economizei 30% dos meus gastos no primeiro mês.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
      },
      {
        name: 'Ana Costa',
        role: 'Estudante',
        content: 'Simples de usar e muito completo. Finalmente consigo organizar meu orçamento estudantil.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
      }
    ];

  return (
    <div 
    ref={containerRef}
    className="min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="parallax-element absolute top-20 left-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        data-speed="30"
      />
      <div 
        className="parallax-element absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        data-speed="20"
      />
      <div 
        className="parallax-element absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-primary/3 blur-2xl"
        data-speed="15"
      />
    </div>
    
    {/* Hero Section */}
    <section className="container relative z-10 px-4 md:px-6 pt-20 pb-16">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20"
        >
          ✨ Simplifique suas finanças
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Domine suas finanças
          <br />
          <span className="text-primary">com inteligência</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
        >
          Controle despesas e rendas com uma interface intuitiva. Visualize seus dados financeiros, tome decisões inteligentes e alcance seus objetivos.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/auth" >
              Começar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-card border"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2070"
            alt="Dashboard preview" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>

    {/* Features Section */}
    <section className="container relative z-10 px-4 md:px-6 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Tudo que você precisa para suas finanças
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Ferramentas poderosas e intuitivas para você ter controle total sobre seu dinheiro
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials Section */}
    {/* <section className="container relative z-10 px-4 md:px-6 py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          O que nossos usuários dizem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Histórias reais de pessoas que transformaram sua vida financeira
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section> */}

    {/* CTA Section */}
    <section className="container relative z-10 px-4 md:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-primary-foreground"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para transformar suas finanças?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já estão no controle de suas finanças
        </p>
        <Button asChild size="lg" variant="secondary" className="rounded-full px-8 font-semibold">
          <Link href="/auth">
            Começar agora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  </div>
  )
}

"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { config } from '@/lib/config';

export default function HackerMenuPage() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { name: '电商收银系统', href: '/e' },
    { name: '上门预约系统', href: '/booking' },
    { name: '点餐系统', href: '/ordering' },
    { name: '人工智能', href: '/ai' },
    { name: '小程序', href: '/miniprogram' },
    { name: 'APP开发', href: '/appdev' },
  ];

  // 生成随机二进制字符串
  const generateBinaryString = (length: number) => {
    return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
  };

  // 终端命令处理
  const handleTerminalCommand = (command: string) => {
    const newOutput = [...terminalOutput];
    
    newOutput.push(`$ ${command}`);
    
    switch(command.toLowerCase()) {
      case 'help':
        newOutput.push('可用命令:');
        newOutput.push('help - 显示帮助信息');
        newOutput.push('clear - 清除终端');
        newOutput.push('menu - 显示菜单项');
        newOutput.push('date - 显示当前时间');
        newOutput.push('exit - 退出终端模式');
        break;
      case 'clear':
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      case 'menu':
        newOutput.push('网站菜单项:');
        menuItems.forEach(item => {
          newOutput.push(`- ${item.name}: ${item.href}`);
        });
        break;
      case 'date':
        newOutput.push(new Date().toString());
        break;
      case 'exit':
        // 退出终端模式，返回正常菜单
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      case '':
        break;
      default:
        newOutput.push(`命令未找到: ${command}`);
        newOutput.push('输入 "help" 查看可用命令');
    }
    
    setTerminalOutput(newOutput);
    setTerminalInput('');
  };

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTerminalCommand(terminalInput);
    }
  };

  // 自动滚动终端输出到底部
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  // 聚焦输入框
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono overflow-hidden crt-effect">
      {/* 背景二进制跑马灯 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute whitespace-nowrap animate-marquee-vertical"
            style={{ 
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 2}s`,
              left: `${i * 5}%`,
              width: '50px'
            }}
          >
            {generateBinaryString(50).split('').map((char, idx) => (
              <div key={idx} className="leading-6">{char}</div>
            ))}
          </div>
        ))}
      </div>

      {/* 扫描线效果 */}
      <div className="scanline absolute inset-0 pointer-events-none"></div>

      {/* 主要内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-flicker">
            {/* {config.site.title} */}  全网承接各种软件开发
          </h1>
          <div className="h-1 w-84 md:w-432 bg-green-400 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-xl text-green-300 mb-2">
            {/* 欢迎来到 12 年 + 程序员的直播间 */}
          </p>
          <p className="text-xs md:text-sm text-green-500">
            {/* 输入 "help" 查看可用命令 | 点击菜单项导航到相应页面 */}
          </p>
        </div>

        {/* 终端模拟器 */}
        {/* <div className="w-full max-w-2xl mb-8 bg-black/80 border border-green-400 p-4 rounded">
          <div className="flex items-center mb-2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-2 text-green-500 text-sm">terminal</div>
          </div>
          
          <div 
            ref={terminalRef}
            className="h-32 overflow-y-auto mb-2 font-mono text-sm"
          >
            {terminalOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none caret-green-400"
              placeholder="输入命令..."
            />
            <span className="cursor-blink ml-1">_</span>
          </div>
        </div> */}

        {/* 菜单选项 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {menuItems.map((item, index) => (
            <Link 
              key={item.href}
              href={item.href}
              className="group block p-4 md:p-6 border border-green-400 hover:border-green-300 hover:bg-green-900/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-3xl font-mono">
                  {item.name}
                </span>
                <span className="text-green-300 group-hover:text-green-200">
                  {/* &gt;&gt; */}
                </span>
              </div>
              <div className="mt-2 text-xs md:text-sm text-green-500">
                {/* 访问 {item.name.toLowerCase()} 模块 */}
              </div>
            </Link>
          ))}
        </div>

        {/* 系统信息 */}
        <div className="mt-8 text-center text-xs text-green-500">
          <p>系统时间: {new Date().toLocaleString('zh-CN')}</p>
          <p className="mt-1">状态: 在线 | 用户: guest | 权限: 访客</p>
        </div>
      </div>
    </div>
  );
}
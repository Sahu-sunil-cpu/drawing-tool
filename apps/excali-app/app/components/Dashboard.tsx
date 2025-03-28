"use client"

import Link from "next/link"
import { Button } from "@repo/ui/button"
//import { Input } from "@/components/ui/input"
import { Pencil, Users, Zap, Github } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      <header className="border-b bg-slate-300 border opacity-70  dark:bg-gray-800 sticky top-0 z-10 shadow-sm ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            Excalidraw Clone
          </Link>
        
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hover:bg-indigo-100 focus:bg-indigo-600 dark:hover:bg-indigo-900 transition-colors p-2 rounded-md">
              Log in
            </Button>
            <Button className="focus:bg-indigo-600 p-2 rounded-md hover:bg-indigo-100 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-indigo-800 dark:text-indigo-200 animate-in fade-in-down">
            Collaborative Whiteboarding Made Simple
          </h1>
          <p className="text-xl text-indigo-600 dark:text-indigo-300 mb-8 max-w-2xl mx-auto animate-in fade-in-up">
            Create, share, and collaborate on beautiful hand-drawn-like diagrams with our easy-to-use tool.
          </p>
          <Button
           
            className="mb-4 bg-indigo-600  rounded-md border p-2 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors animate-bounce"
          >
            Start drawing
          </Button>
          <p className="text-sm text-indigo-500 dark:text-indigo-400">No sign-up required - free for personal use</p>
        </section>

        <section className="py-20 bg-indigo-100 dark:bg-indigo-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
              Why Choose Excalidraw Clone?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-in fade-in-up">
                <Pencil className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Intuitive Drawing</h3>
                <p className="text-indigo-600 dark:text-indigo-400">
                  Create beautiful, hand-drawn like diagrams with our easy-to-use tools.
                </p>
              </div>
              <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-in fade-in-up [--animation-delay:200ms]">
                <Users className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                  Real-time Collaboration
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">
                  Work together with your team in real-time, no matter where you are.
                </p>
              </div>
              <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-in fade-in-up [--animation-delay:400ms]">
                <Zap className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">Lightning Fast</h3>
                <p className="text-indigo-600 dark:text-indigo-400">
                  Experience smooth and responsive drawing with our optimized canvas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-200">Ready to start drawing?</h2>
            <Button
            
              className="bg-indigo-600 hover:bg-indigo-700 border rounded-md p-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors animate-pulse"
            >
              Launch Excalidraw Clone
            </Button>
          </div>
        </section>

        <section className="py-20 bg-indigo-100 dark:bg-indigo-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-200">
              Stay updated with our latest features
            </h2>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white p-2 dark:bg-gray-800 border-indigo-300 dark:border-indigo-700"
              />
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 border rounded-md p-2  dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-4 md:mb-0">
              © 2025 Excalidraw Clone. All rights reserved.
            </div>
            <nav className="flex space-x-4">
              <Link
                href="#"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="https://github.com"
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors flex items-center"
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


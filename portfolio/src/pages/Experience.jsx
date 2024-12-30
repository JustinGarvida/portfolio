import React from 'react'
import Timeline from '../components/experience/Timeline'

export const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="flex flex-col items-center">
         <Timeline defaultColor="bg-white" />
      </div>
    </section>
  )
}
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PantoneClock = () => {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
   const timer = setInterval(() => setTime(new Date()), 1000);
   return () => clearInterval(timer);
 }, []);

 const hours = time.getHours().toString().padStart(2, '0');
 const minutes = time.getMinutes().toString().padStart(2, '0');
 const seconds = time.getSeconds().toString().padStart(2, '0');

 return (
   <div className="min-h-screen flex items-center justify-center bg-pantoneBg p-8">
     <div className="w-clockWidth h-clock bg-clockBg rounded-2xl shadow-2xl p-12 flex flex-col items-center">
       <div className="text-[80px] text-white font-mono font-bold tracking-[0.2em] mb-8">
         {hours}:{minutes}:{seconds}
       </div>
       <div className="w-full flex-1 pb-8">
         <ResponsiveContainer width="100%" height="85%">
           <LineChart data={[
             { name: 'Hours', value: time.getHours() },
             { name: 'Minutes', value: time.getMinutes() },
             { name: 'Seconds', value: time.getSeconds() }
           ]}>
             <XAxis dataKey="name" stroke="#fff" fontSize={20} tickLine={false} />
             <YAxis stroke="#fff" fontSize={20} tickLine={false} domain={[0, 60]} />
             <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: 'none' }} />
             <Line type="monotone" dataKey="value" stroke="#fff" strokeWidth={3} dot={false} />
           </LineChart>
         </ResponsiveContainer>
       </div>
     </div>
   </div>
 );
};

export default PantoneClock;

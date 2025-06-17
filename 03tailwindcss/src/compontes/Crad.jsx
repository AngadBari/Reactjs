
import React from 'react'

function Crad({name,text}) {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          class="w-full h-48 object-cover"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Office workspace"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 text-gray-800">{name}</h2>
          <p className="text-gray-600 text-base">
            A sleek and minimal office setup that boosts productivity and
            creativity.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
            {text}
          </span>
          <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
            #minimal
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-2">
            #design
          </span>
        </div>
      </div>
    );
}

export default Crad

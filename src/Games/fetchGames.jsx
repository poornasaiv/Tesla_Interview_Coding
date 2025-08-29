import React from 'react'

const random = Math.random() * 10;
const fetchGames = () => 
      new Promise((resolve, reject) => {
        setTimeout(()=>{
          if(random < 6)
          {
            resolve(
              [{id : 1, name : 'A', inStock : true},
                {id : 2, name : 'B', inStock : false},
                {id : 3, name : 'C', inStock : false},
                {id : 4, name : 'D', inStock : true},
                {id : 5, name : 'E', inStock : false},
                {id : 6, name : 'F', inStock : true},
                {id : 7, name : 'G', inStock : false},
                {id : 8, name : 'H', inStock : true}
            ])
          } 
          else
          {
            reject("Error loading the games......")
          }
        }, 1000)
      })  


export {fetchGames};  
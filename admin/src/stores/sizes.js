import { defineStore } from "pinia";


export const usesizes=defineStore('thesizes',{
    state:()=>
    ({
        size:[
            {id:1,name:'XS'},
            {id:2,name:'S'},
            {id:3,name:'M'},
            {id:4,name:'L'},
            {id:5,name:'XL'},

        ]
    })
})
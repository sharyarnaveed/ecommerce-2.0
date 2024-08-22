import { defineStore } from "pinia";


export const usesizes=defineStore('thesizes',{
    state:()=>
    ({
        size:[
            {id:1,name:'XS'},
            {id:1,name:'S'},
            {id:2,name:'M'},
            {id:3,name:'L'},
            {id:3,name:'XL'},

        ]
    })
})
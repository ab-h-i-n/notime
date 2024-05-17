import { defineField, defineType } from "sanity";


export default defineType({

    name : 'frequently_asked_question',
    title : 'Frequently Asked Question',
    type : 'document',

    fields : [

        defineField({
            name : 'question',
            title : 'Question',
            type : 'string'
        }),
        defineField({
            name : 'answer',
            title : 'Answer',
            type : 'text'
        })

    ]

})
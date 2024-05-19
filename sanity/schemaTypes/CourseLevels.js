import { defineType , defineField } from "sanity";

export default defineType({

    name : 'levels',
    title : 'Course Levels',
    type : 'document',

    fields : [

        defineField({
            name : 'title',
            title : 'Title',
            type : 'string',
        }),

        defineField({
            name : 'level_title',
            title : 'Level Title',
            type : 'string',
        }),

    
        defineField({
            name : 'main_contents',
            title : 'Main Contents',
            type : 'array',
            of : [
                {
                    type : 'sub_contents'
                }
            ]
        })

    ]

})
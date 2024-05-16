import {defineField, defineType} from 'sanity'


export default defineType({

    name : 'review',
    title : 'Review',
    type : 'document',

    fields : [
        
        defineField({
            name : 'name',
            title : 'Name',
            type : 'string'
        }),
        defineField({
            name : 'position',
            title : 'Position',
            type : 'string'
        }),
        defineField({
            name : 'review',
            title : 'Review',
            type : 'text',
            validation: (Rule) => Rule.min(150).max(250),
        }),
        defineField({
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        }),
    ]
})
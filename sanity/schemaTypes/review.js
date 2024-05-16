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
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'name',
                maxLength : 96
            }
        }),
        defineField({
            name : 'position',
            title : 'Position',
            type : 'string'
        }),
        defineField({
            name : 'review',
            title : 'Review',
            type : 'text'
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
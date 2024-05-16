
import { defineType , defineField } from "sanity";


export default defineType({


    name : "youtube_videos",
    title : "Youtube Videos",
    type : "document",

    fields : [

        defineField({
            name : 'title',
            title : 'Title',
            type : 'string'
        }),

        defineField({
            name : 'description',
            title : 'Description',
            type : 'string',
            validation : (Rule) => Rule.min(50).max(150)
        }),

        defineField({
            name : 'link',
            title : 'Link',
            type : "url"
        }),

        defineField({
            name : "thumbnail",
            title : "Thumbnail",
            type : "image",
            options : {
                hotspot : true
            }
        })

    ]

})
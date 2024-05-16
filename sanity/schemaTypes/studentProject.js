
import { defineField, defineType } from "sanity";


export default defineType({

    name : 'student_project',
    title : 'Student Project',
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
            name : 'profile_image',
            title : 'Profile Image',
            type : 'image',
            options : {
                hotspot : true
            }
        }),
        defineField({
            name : 'project_title',
            title : 'Project Title',
            type : 'string',
            validation : (Rule) => Rule.max(50).min(10)
        }),
        defineField({
            name : 'project_description',
            title : 'Project Description',
            type : 'text',
            validation : (Rule) => Rule.max(100).min(30)
        }),
        defineField({
            name : 'project_link',
            title : 'Project Link',
            type : 'url'
        }),
        defineField({
            name : 'project_image',
            title : 'Project Image',
            type : 'image',
            options : {
                hotspot : true
            }
        })

    ]

});
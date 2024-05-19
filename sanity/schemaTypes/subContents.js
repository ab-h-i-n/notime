import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sub_contents',
  title: 'Sub Contents',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of:[
        {
          type: 'string'
        }
      ]
    }),
  ],
})

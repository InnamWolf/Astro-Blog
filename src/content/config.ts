import { defineCollection, z } from "astro:content";



const blogCollection = defineCollection({
    type:'content',
    schema: z.object({
        title:z.string(),
        date:z.date(),
        description:z.string(),
        image:z.string(),

        //Relación
        author:z.string(),

        //Relación
        tags:z.array(z.string()),
    })
})

//Exportamos la coleccion que creamos arriba

export const collection = {
    blog:blogCollection,
}



// Para guardar las colecciones se tiene que crear un directorio (carpeta) se crea dentro de CONTENT
// con el nombre de blog
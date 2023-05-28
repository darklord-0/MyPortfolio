import Head from "next/head"
import Link from "next/link"

const Meta = ({title,keywords,description}) => {
  return (
    <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Harshit Singh" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title : 'Harshit | Full-Stack Developer',
    keywords:'web development, nextjs,tailwind,harshit,portfolio',
    description:'A Porfolio website made using Next.js and tailwind css'
}

export default Meta
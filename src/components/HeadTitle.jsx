import Head from "next/head";

const HeadTitle = ({title}) => {
    return ( 
        <Head>
            <title>{title}</title>
            <link rel="icon" href="./mark.svg" type="image/svg" sizes="32x32" />
        </Head>
     );
}
 
export default HeadTitle;
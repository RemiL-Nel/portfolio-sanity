import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { urlFor, sanityClient } from "../../sanity";
import { Series } from "../../typings";

interface Props {
  serie: Series;
}

function Post({ serie }: Props) {
  return <div>Series : {serie?.title}</div>;
}
export default Post;

export const getStaticPaths = async () => {
  const query = groq`
  *[_type == "series"]{
    _id,
    slug {
      current
    }
    
  }
  `;
  const series = await sanityClient.fetch(query);

  const paths = series.map((serie: Series) => ({
    params: {
      slug: serie.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = groq`
  *[_type=='series' && slug.current == $slug][0]
  {
    ...,
  }
  `;
  const serie = await sanityClient.fetch(query, { slug: params?.slug });

  if (!serie) {
    return {
      notFound: true,
    };
  } else
    return {
      props: {
        serie,
      },
    };
};

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

//http://localhost:3000/api/og?title=Sti%C5%BEe%20ne%C5%A1to%20novo%20i%20druga%C4%8Dije%20za%20tvoje%20poslovanje&description=Ovo%je%testni%opis&articleImageURL=https://a.storyblok.com/f/198973/400x500/e474e1f816/web-cover-01.png

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description');
    const hasArticleImageURL = searchParams.has('articleImageURL');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Stiže nešto novo i drukačije za tvoje poslovanje';
    const description = hasDescription  ? searchParams.get('description')?.slice(0, 150) : 'Ususret velikom iskazanom interesu za našim digitalnim proizvodima odlučili smo se za razvoj konfiguratora za naše privatne i poslovne korisnike.';
    const articleImageURL = hasArticleImageURL
      ? searchParams.get('articleImageURL')
      : 'https://a.storyblok.com/f/198973/400x500/e474e1f816/web-cover-01.png';
    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

        <div tw='bg-black flex w-1200 h-630 p-5'>
          <div tw='flex'>
            <img
              alt='Vercel'
              height={500}
              src={`${articleImageURL}`}
              style={{ margin: '40px 0px 40px 20px' }}
              width={400}
            />

            <div tw='flex flex-col p-6'>
              <div tw='flex flex-col p-6'>
                <div tw='text-5xl text-white font-bold w-165'>{title}</div>
                <div tw='text-2xl text-white mt-6 w-160'>
                  {description}
                </div>
                <div tw='flex flex-row items-center justify-between mt-52 w-165'>
                  <div tw='flex text-white text-xl'>www.pointsyncc.com</div>
                  <img
                    alt='Vercel'
                    height={52}
                    src={
                      'https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/logo-icon-transparent-74x74-trimmed.png'
                    }
                    width={52}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

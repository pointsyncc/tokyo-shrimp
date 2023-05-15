import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

//http://localhost:3000/api/page-og-1200x630?title=Ovo je test&description=Ovo je testni opis

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has('title');
    const hasDescription = searchParams.has('description');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Contact';
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 150)
      : 'Slobodno nas kontaktirajte vezano za bilo što. Odgovor možete očekivati u roku od 24 sata.';
    /*   const articleImageURL = hasArticleImageURL
      ? searchParams.get('articleImageURL')
      : 'https://a.storyblok.com/f/198973/400x500/e474e1f816/web-cover-01.png'; */
    return new ImageResponse(
      (
        // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections

        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            backgroundColor: 'black',
          }}
        >
          <div tw='flex items-center'>
            <div tw='flex'>
              <img
                alt='Vercel'
                height={400}
                src='https://tokyo.fra1.cdn.digitaloceanspaces.com/projects/tokyo-shrimp/assets/PSC-main-logo-accent-03-rotate-90%20(400x46.5).png'
                style={{ margin: '40px 0px 40px 20px' }}
                width={46.5}
              />
            </div>

            <div tw='flex flex-col p-6 ml-36'>
              <div tw='flex flex-col p-6'>
                <div tw='text-5xl text-white font-bold w-165'>{title}</div>
                <div tw='text-2xl text-white mt-6 w-160 text-left'>{description}</div>
                <div tw='flex flex-row items-end justify-between mt-52 w-165'>
                  <div tw='flex flex-col gap-3'>
                    <div tw='flex text-white text-xl'>+385 99 214 482</div>
                    <div tw='flex text-white text-xl'>info@pointsyncc.com</div>
                    <div tw='flex text-white text-xl'>www.pointsyncc.com</div>
                  </div>
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

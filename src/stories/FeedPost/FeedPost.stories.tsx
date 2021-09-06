import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { FeedPost } from '../../components/FeedPost/FeedPost';

export default {
  component: FeedPost,
  title: 'Components/FeedPost',
  decorators: [
    (Story: React.FC) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
};

const text1 = `Jak to jest być skrybą, dobrze? A, wie pan, moim zdaniem to nie
  ma tak, że dobrze, albo że niedobrze. Gdybym miał powiedzieć, 
  co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ludzi, 
  którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kie
  dy byłem sam, i co ciekawe, to właśnie przypadkowe spotkania
  wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się p
  ewne wartości, nawet pozornie uniwersalne, bywa, że nie znaj
  duje się zrozumienia, które by tak rzec, które pomaga się na
  m rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je zn
  alazłem, i dziękuję życiu! Dziękuję mu; życie to śpiew, życi
  e to taniec, życie to miłość! Wielu ludzi pyta mnie o to sam
  o: ale jak ty to robisz, skąd czerpiesz tę radość? A ja odpo
  wiadam, że to proste! To umiłowanie życia. To właśnie ono sp
  rawia, że dzisiaj na przykład buduję maszyny, a jutro – kto 
  wie? Dlaczego by nie – oddam się pracy społecznej i będę, ot
  , choćby, sadzić... doć— m-marchew...`;
const avatar =
  'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/bf/bfb953c0e4436d5400ea1d73d89c39c63a3285a1_full.jpg';
const text = 'Social media bez memów? Ale jak to???';

// export const Default = () => (
//   <>
//     <FeedPost ownerUid="123123" displayName="Michael" content={text} timestamp={firebase.default.firestore.FieldValue.serverTimestamp()} />
//     <FeedPost ownerUid="123123" displayName="Otis Skryba" content={text1} avatar={avatar} timestamp="23 July, 2021" />
//   </>
// );

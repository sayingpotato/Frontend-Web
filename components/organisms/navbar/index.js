import { NavbarComponent, NavbarOne, MainComponent } from './style'
import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";
import Link from 'next/link'
import ImageTitle from '@molecules/imageTitle';

export default function Navbar({ children }) {
  const whoStatus = useRecoilValue(WhoStatus);

  const lists = whoStatus === 'customer'
  ? [
      { image: "/images/search.svg", title: '검색', next: 'search' },
      { image: "/images/todayDiscount.svg", title: '오늘의 할인', next: 'todaydiscount' },
      { image: "/images/map.svg", title: '할인 지도', next: 'map' },
      { image: "/images/orderedList.svg", title: '주문 내역', next: 'order' },
      { image: "/images/potato.svg", title: '마이 페이지', next: 'mypage' },
    ]
  : [
      { image: "/images/search.svg", title: '검색', next: 'search' },
      { image: "/images/todayDiscount.svg", title: '오늘의 할인', next: 'todaydiscount' },
      { image: "/images/map.svg", title: '할인 지도', next: 'map' },
      { image: "/images/mystore.png", title: '내 가게', next: 'mystore' },
      { image: "/images/potato.svg", title: '마이 페이지', next: 'mypage' },
    ];

  return (
    <>
      <MainComponent>{children}</MainComponent>
      <NavbarComponent>
        {lists.map((item, index) => {
          const nextUrl = `/${item.next}`
          return (
            <Link key={index} href={nextUrl}>
              <ImageTitle textClassName="navbarText" text={item.title} src={item.image} alt={item.title} />
            </Link>
          )
        })}
      </NavbarComponent>
    </>
  )
}

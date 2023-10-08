import { useState } from 'react'
import Title from '@components/title'
import Image from 'next/image'
import search from '@public/images/searchBlack.svg'
import cancel from '@public/images/cancelBlack.svg'
import { useDebounce } from '@hooks/debounce'
import { 
    SearchDiv, 
    FirstSearchDiv, 
    SecondSearchDiv, 
    StoreName, 
    MenuName, 
    SearchTag,
    StoreNameList,
    MenuNameList,
    Store,
    StorePicture,
    StoreNames,
    Menu,
    MenuInfo,
    MenuDescription,
    MenuMenu,
    MenuNames
 } from '../../styles/search/style'
import SearchButton from '@components/searchButton'
import SearchInput from '@components/searchInput'


const Search = () => {
    const [keyword, setKeyword] = useState('')
    
    const onChangeSearchInput = (e) => {
        setKeyword(e.target.value)
    }
    
    const onClickSearchButton = () => {
        debouncedSetKeyword()
    }

    const debouncedSetKeyword = useDebounce(() => console.log(keyword), 500)
    const getSearchList = useGetSearchList(keyword);

    const [storeArray, setStoreArray] = useState()
    const [menuArray, setMenuArray] = useState()

    useEffect(() => {
        if (debouncedSetKeyword !== undefined) {
            setData(getSearchList); 
            const storeResult = getSearchList && getSearchList.filter(item => item.findByStore === true);
            setStoreArray(storeResult);
            const menuResult = getSearchList && getSearchList.filter(item => item.findByStore === false);
            setMenuArray(menuResult);
        }
    }, [keyword]);

    const clear = () => {
        setKeyword('')
    }

    return (
        <>
            <Title>검색</Title>
            <hr/>
            <SearchDiv>
                <FirstSearchDiv>
                    <Image 
                        width={30}
                        height={30}
                        src={search}
                        alt='search'/>
                    <SearchInput
                        value={keyword}
                        onChange = {onChangeSearchInput}/>
                    <Image 
                        onClick={clear}
                        className='cancel'
                        width={24}
                        height={24}
                        src={cancel}
                        alt='cancel'/>
                </FirstSearchDiv>
                <SecondSearchDiv>
                    <SearchButton 
                        backGroundColor={'black'}
                        color={'white'}
                        onClick = {onClickSearchButton}/>
                </SecondSearchDiv>
            </SearchDiv>
            <StoreName>
                <SearchTag>상호명</SearchTag>
                <StoreNameList>
                    {data.map((item, index) => {
                        return (
                        <Store key = {index}>
                                <StorePicture>
                                    <Image 
                                        className='storeImage'
                                        width={60}
                                        height={60}
                                        src='/images/meat1.svg'
                                        alt='storeImage'/>
                                </StorePicture>
                                <StoreNames>
                                    {item.name}
                                </StoreNames>
                        </Store>
                        )
                    })}
                </StoreNameList>
            </StoreName>
            <MenuName>
                <SearchTag>메뉴명</SearchTag>
                <MenuNameList>
                    {data2.map((item, index) => {
                        return (
                            <Menu key = {index}>
                                <Image 
                                    className='menuImage'
                                    width={78}
                                    height={78}
                                    src='/images/meat1.svg'
                                    alt='storeImage'/>
                                <MenuInfo>
                                    <MenuNames>
                                    {item.name}
                                    </MenuNames>
                                    <MenuDescription>
                                    {item.des}
                                    </MenuDescription>
                                    <MenuMenu>
                                        {item.menu.map((item, index) => {
                                            return (
                                                <p key = {index}>
                                                {item}
                                                </p>
                                            )
                                        })}
                                    </MenuMenu>
                                </MenuInfo>
                            </Menu>  
                        )
                    })}
                </MenuNameList>
            </MenuName>
           
        </>
    )
}

export default Search
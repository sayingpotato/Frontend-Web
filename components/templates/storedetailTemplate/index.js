import Router, { useRouter } from 'next/router'
import { StoredetailTemplateDiv } from './style';

import Line from "@atoms/line"
import Title from "@molecules/title"
import StoreInformation from "@organisms/storeInformation"
import StoreVisitorReview from "@organisms/storeVisitorReview"
import StoreImages from "@organisms/storeImages"
import MenuImages from "@organisms/menuImages"

const StorelistTemplate = ({data}) => {
    console.log(data)

    const router = useRouter()

    return (
        <StoredetailTemplateDiv>
            <Title text={data.name} />
            <Line />
            <StoreInformation address={data.address.roadAddr} time={data.storeOperationHours[0].startTime} call={data.phone} concent={"8개"} rank={"1위 무질서도"} room={data.tableImg} />
            <Line />
            <StoreVisitorReview reviewData={data.reviewResultOfCafe}/>
            <Line />
            <StoreImages images={data.storeDetailStoreImages}/>
            <Line />
            <MenuImages menuData={data.storeDetailItems}/>
        </StoredetailTemplateDiv>
    );
};

export default StorelistTemplate;
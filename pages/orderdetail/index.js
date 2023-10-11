import { useEffect, useState, useRef } from 'react'
import Router, { useRouter } from 'next/router'

import Title from '@components/title'
import useGetStoreDetail from '@hooks/useGetStoreDetail';
import OrderdetailTemplate from '@templates/orderdetailTemplate'

const Orderdetail = () => {

    const router = useRouter();

    const id = router.query.id;
    const storeName = router.query.storeName;
    const [data, setData] = useState("");
    const getStoreDetail = useGetStoreDetail(id);

    useEffect(() => { 
        setData(getStoreDetail); 
    },[getStoreDetail]);

    const title = storeName + " 주문 내역";

    return (
        <div>
            <Title>{title}</Title>
            {data && <div>
                <OrderdetailTemplate data={data}/>
            </div>}
        </div>
    );
};

export default Orderdetail;
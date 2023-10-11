import Router, { useRouter } from 'next/router';

import Text from '@components/atoms/text';
import Image from '@components/atoms/image';
import { WholeDiv } from './style';

const MystoreTemplate = ({data}) => {

    const mystoreDetailButton = () => {
        Router.push({
            pathname: '/orderdetail',
            query: { id: data.id, storeName: data.title },
        })
    }
    
    return (
        <WholeDiv key={data.id} onClick={mystoreDetailButton}>
            <Text className="mystoreName" text={data.title} />
            <Text className="mystoreDes" text={data.comment} />
            <Image className="mystoreImage" src={data.image} />
        </WholeDiv>
  );
};

export default MystoreTemplate;
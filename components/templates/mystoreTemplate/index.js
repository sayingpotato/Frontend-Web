import { useRouter } from 'next/router';

import Text from '@components/atoms/text';
import Image from '@components/atoms/image';
import { WholeDiv } from './style';

const MystoreTemplate = ({data}) => {
    const router = useRouter();

    const mystoreDetailButton = () => {
        router.push('');
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
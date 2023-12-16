import styled from 'styled-components';
import Image from 'next/image';
import Color from './Color';


export default function Card(){
    return (
        <div>
            <Image src="/images/1.jpg" width={300} height={300} />
            <Color></Color>
        </div>
    )
}
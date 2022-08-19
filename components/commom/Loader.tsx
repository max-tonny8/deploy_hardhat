import Image from "next/image";
import loaderSVG from '../../assets/loader.svg';

export const Loader = ({ className, size }:{className:string, size:number}) => (    
  <div className={className}>
    <Image
     unoptimized
     src={loaderSVG}
     alt="Loading..."
     layout='responsive'
     width={size}
     height={size}
    />
 </div>); 
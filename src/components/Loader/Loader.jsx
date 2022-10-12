import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { LoaderDiv } from '../Styles';

export const Loader = () => {

    return(
        <LoaderDiv>
          
            <ClimbingBoxLoader
            color="#3f51b5"
            size={30}
            />
        </LoaderDiv>
    )
}

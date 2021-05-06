import styled from "styled-components";
import PersonCard from "./PersonCard";
import { gql, useQuery } from "@apollo/client";
import { MouseEventHandler, useState } from "react";
import PeopleSkeleton from "../Skeletons/PeopleSkeleton";
import { PersonType } from "../@myTypes";
const People: React.FC = () => {
    const [pageNo, setPageNo] = useState(1);
    const getPeopleByPage = gql`
        query{
            peopleByPage(page:${pageNo}){
                name
                gender
                mass
                height
                homeworld{
                    name
                }
            }
        }
    `
    const { loading, error, data } = useQuery(getPeopleByPage);
    const handleDecrement: MouseEventHandler = (e) => {
        setPageNo(pageNo === 1 ? 1 : pageNo - 1)
    }
    const handleIncrement: MouseEventHandler = (e) => {
        setPageNo(pageNo === 9 ? 9 : pageNo + 1)
    }
    return (
        <PeopleContainer className="container">
            <PageNumber className="hide-on-med-and-down">
                <p>Page Number:</p>
                <div onClick={ handleDecrement } className="btn btn-small black white-text waves-effect waves-light">
                    <i className="material-icons small white-text">arrow_back</i>
                </div>
                <span>{ pageNo }</span>
                <div onClick={ handleIncrement} className="btn btn-small black white-text waves-effect waves-light">
                    <i className="material-icons small white-text">arrow_forward</i>
                </div>
            </PageNumber>
            <PageNumber className="hide-on-large-only">
                <div onClick={ handleDecrement } className="btn btn-small black white-text waves-effect waves-light">
                    <i className="material-icons small white-text">arrow_back</i>
                </div>
                <div onClick={ handleIncrement} className="btn btn-small black white-text waves-effect waves-light">
                    <i className="material-icons small white-text">arrow_forward</i>
                </div>
                <span>{ pageNo }</span>
            </PageNumber>
            {
                //if data is available
                data && data.peopleByPage.map((person: PersonType) => (
                    <div key={person.name}>
                        <PersonCard  person={person} />
                    </div>
                ))
            }

            {
                //if loading
                loading && <PeopleSkeleton />
            }
            {
                //if error
                error &&
                <div className="container">
                    <div className="center">
                        <h3 className="white-text">{ error.message }</h3>
                    </div>
                </div>
            }

        </PeopleContainer>
     );
}

export const PeopleContainer = styled.div`
    align-items: center;
    display: grid;
    grid-template-columns: 1fr ;
`;
export const PageNumber = styled.div`

    margin-top: 30px;
    padding: 20px;
    background-color: rgba( 155, 155, 155, 0.3);
    border-radius: 20px;
    width: 100%;
    display: flex;
    color: white;
    font-size: 30px;
    align-items: center;
    justify-content: ${"space-evenly"};

`;
export default People;

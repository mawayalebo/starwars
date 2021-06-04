import styled from "styled-components";
import PersonCard from "./PersonCard";
import { gql, useQuery } from "@apollo/client";
import { MouseEventHandler, useState, useEffect } from "react";
import PeopleSkeleton from "../Skeletons/PeopleSkeleton";
import { PersonType } from "../@myTypes";
import { page , personName } from "../cache";
import { Link } from "react-router-dom";
const People: React.FC = () => {
    

    const [pageNumber, setPageNumber] = useState(page());
    const handleDecrement: MouseEventHandler = (e) => {
        if (pageNumber === 1) {
            setPageNumber(1);
        } else {
            setPageNumber(pageNumber - 1);
        }

    }
    const handleIncrement: MouseEventHandler = (e) => {
        if (pageNumber === 9) {
            setPageNumber(9);
        } else {
            setPageNumber(pageNumber + 1);
        }
    }

    const clickPerson = (name: string):void => {
        personName(name);
    }

    const getPeopleByPage = gql`
        query{
            peopleByPage(page:${pageNumber}){
                name
            }
        }
    `
    const { loading, error, data } = useQuery(getPeopleByPage);

    useEffect(() => {
        page(pageNumber);
    },[page, pageNumber])
    return (
        <PeopleContainer className="container">
            <PageNumber className="hide-on-med-and-down">
                <p>Page Number:</p>
                <div onClick={ handleDecrement } className="btn btn-small black white-text waves-effect waves-light">
                    <i className="material-icons small white-text">arrow_back</i>
                </div>
                <span>{ pageNumber }</span>
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
                <span>{ pageNumber }</span>
            </PageNumber>
            {
                //if data is available
                data && data.peopleByPage.map((person: PersonType) => (
                    <div key={person.name} onClick={(e) => { clickPerson(person.name); } }>
                        <Link to="/detail">
                            <PersonCard  person={person} />
                        </Link>
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
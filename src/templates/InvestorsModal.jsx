import { useEffect, useState } from 'react';
import { getResponse } from '../apiRequests/IdeasRequests';

export default function InvestorsModal(props) {
  const { id } = props;
  const [invest, setInvestor] = useState({});

  useEffect(async () => {
    const response = await getResponse(id);
    const { data: { investor } } = response;
    setInvestor(investor);
  });

  return (
    <div>
      <p>
        <b>Name: </b>
        {invest.name}
      </p>
      <p>
        <b>Surname: </b>
        {invest.surname}
      </p>
      <p>
        <b>Email: </b>
        {invest.email}
      </p>
      <hr />
    </div>
  );
}
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectView() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <div />;
}

export default RedirectView;

import {useQuery, useMutation, useQueryClient} from 'react-query';
import {Button} from '@mui/material';

import InfoTable from '../InfoTable';

const policyholdersApi =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';
const fetchPolicyholders = async () => 
  await fetch(policyholdersApi).then(r => {if (r.ok) { return r.json(); }});
const addPolicyholder = async (policyholder: TPolicyholder) =>
  await fetch(policyholdersApi, { method: 'POST', body: JSON.stringify(policyholder) }).then(r => {if (r.ok) { return r.json(); }});

type TPolicyholder = {
  address: {
    city: string,
    line1: string,
    line2?: string,
    postalCode: string,
    state: string
  },
  age: number,
  isPrimary: boolean,
  name: string,
  phoneNumber: string
};

const formatPolicyholder = (ph: TPolicyholder) => {
  return [
    {
      key: 'Name',
      value: ph.name
    },
    {
      key: 'Age',
      value: ph.age
    },
    {
      key: 'Address',
      value: `${ph.address.line1}\n${ph.address.line2 ? `${ph.address.line2}\n` : '\n'}${ph.address.city}, ${ph.address.state} ${ph.address.postalCode}`
    },
    {
      key: 'Phone Number',
      value: ph.phoneNumber
    },
    {
      key: 'Primary policyholder?',
      value: ph.isPrimary.toString()
    }
   ];
};

const formData: TPolicyholder = {
  address: {
    city: 'Anytown',
    line1: '123 Main Street',
    postalCode: '01234',
    state: 'AZ'
  },
  age: 42,
  isPrimary: false,
  name: 'Joe Somebody',
  phoneNumber: '1-555-555-5555'
};

function PolicyholdersView() {
  const queryClient = useQueryClient();
  const {data} = useQuery<TPolicyholder[], Error>(
    'policyholders',
    () => fetchPolicyholders().then(({ policyHolders }) => policyHolders),
    {
      placeholderData: [],
      staleTime: Infinity,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );
  const mutation = useMutation(addPolicyholder, {
    onMutate: async newPolicyholder => {
      await queryClient.cancelQueries('policyholders');
      const previousPolicyholders = queryClient.getQueryData<TPolicyholder[]>('policyholders');
      queryClient.setQueryData<TPolicyholder[]>('policyholders', old => {return old ? [...old, newPolicyholder] : [newPolicyholder]})
      return { previousPolicyholders }
    },
    onError: (err, newPolicyholder, context) => {
      queryClient.setQueryData('policyholders', context?.previousPolicyholders)
    }
  });

  const rows = data?.map(formatPolicyholder);

  return (
    <>
      {rows?.map(row => 
        <InfoTable key={row[3].key} header="Policy Holder" rows={row ?? []} />
      )}
      <Button
        onClick={() => mutation.mutate(formData)}
        variant="contained"
        color="primary"
        size="large"
      >
        Add a policyholder
      </Button>
    </>
  );
}

export default PolicyholdersView;

/*
TODO:
- Add form to capture policyholder data
- Add error/loading states to PolicyholdersView
- Update API implementation to persist changes when adding new policyholders
-- Implement retry logic on failure
- Add styling to PolicyholdersView page to more clearly represent policyholder data
-- Make better use of isPrimary flag
- Add feature flags to hide "beta" content (content not ready for public consumption)
- Define central location for API endpoints and configuration
*/

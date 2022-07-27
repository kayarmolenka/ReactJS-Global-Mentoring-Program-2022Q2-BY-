import { store } from '../src/store';
import { Provider, useDispatch } from 'react-redux';
import { router } from 'next/client';
import { useEffect, Suspense, lazy } from 'react';
import { useRouter } from 'next/router';

const AppLazy = lazy(() => import('../src/components/App/App'));

const Index = () => {
  const { title } = router.query;

  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      console.log(title);
    }
  }, [title]);

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppLazy />
      </Suspense>
    </Provider>

    // <div>Hello</div>
  );
};

export default Index;

import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (route: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(route, params));
  }
};
export const resetAndNavigate = (route: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({index: 0, routes: [{name: route, params: params}]}),
    );
  }
};

export const push = (route: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(route, params));
  }
};

export function replace(route: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(route, params));
  }
}

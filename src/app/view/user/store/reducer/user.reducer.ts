import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../action/user.actions';
import { User } from '../../../../interfaces/user/user';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const usersFeatureKey = 'users';

export interface UserAppState extends EntityState<User> {
  error: any;
  roles: any[];
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  error: undefined,
  roles: []
});


export const userReducer = createReducer(
  initialState,
  on(UserActions.createUser,
    (state ) => ({...state, error: null })
   ),
  on(UserActions.createUserSuccess,
    (state, { user }) => (adapter.addOne( user, {...state, error: false}))
  ),
  on(UserActions.createUserFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(UserActions.updateUser,
    (state ) => ({...state, error: null })
  ),
  on(UserActions.updateUserSuccess,
    (state, { user }) => (adapter.updateOne({ id: user.id, changes: user }, {...state, error: false}))
  ),
  on(UserActions.updateUserFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(UserActions.loadUser,
    state => ({...state})),
  on(UserActions.loadUserSuccess,
    (state, { user }) => (adapter.upsertOne( user , {...state, error: false}))
  ),
  on(UserActions.loadUserFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(UserActions.loadUsers,
    state => ({...state})),
  on(UserActions.loadUsersSuccess,
    (state, { users }) => (adapter.setAll(users, {...state, error: false}))
  ),
  on(UserActions.loadUsersFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(UserActions.deleteUser,
    state => ({...state})),
  on(UserActions.deleteUserSuccess,
    (state, { id }) => (adapter.removeOne(id, {...state, error: false}))
  ),
  on(UserActions.deleteUserFailure,
    (state, { error } ) => ({...state, error })
  ),
  on(UserActions.loadRoles,
    state => ({...state})),
  on(UserActions.loadRolesSuccess,
    (state, { roles }) => ( {...state, roles, error: false })
  ),
  on(UserActions.loadRolesFailure,
    (state, { error } ) => ({...state, error })
  ),

);

export function UserAppReducer(state, action) {
  return userReducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of User ids
export const selectUserIds = selectIds;

// select the dictionary of User entities
export const selectUserEntities = selectEntities;

// select the array of Users
export const selectAllUsers = selectAll;

// select the total User count
export const selectUserTotal = selectTotal;

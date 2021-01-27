import React from 'react';
import {FlatList} from 'react-native';

const VirtualizedView = ({children}) => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => <React.Fragment>{children}</React.Fragment>}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default VirtualizedView;

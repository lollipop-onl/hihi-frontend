import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '../Common/Table';

class Abstract extends Component {
  render () {
    const data = this.props.separationData;

    return (
      <div>
        <div className="wrapper--margin">
          <Table
            data={data.abstract.separations ? data.abstract.separations
              .sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
              })
              .map((item) => {
              return [
                item.name,
                item.register,
                item.modifier,
                item.created,
                item.modified
              ];
            }) : []}
            header={[
              { title: '分別方法' },
              { title: '登録者' },
              { title: '最終更新者' },
              { title: '登録日時' },
              { title: '最終更新日時' }
            ]}
          />
        </div>
        <div className="wrapper--margin">
          <Table
            data={data.abstract.notices ? data.abstract.notices
              .sort((a, b) => {
                if (a.message > b.message) return 1;
                if (a.message < b.message) return -1;
                return 0;
              })
              .map((item) => {
              return [
                item.message,
                item.register,
                item.modifier,
                item.created,
                item.modified
              ];
            }) : []}
            header={[
              { title: '注意事項' },
              { title: '登録者' },
              { title: '最終更新者' },
              { title: '登録日時' },
              { title: '最終更新日時' }
            ]}
          />
        </div>
      </div>
    )
  }
}

Abstract.propTypes = {
  separationData: PropTypes.object
};

function mapStateToProps (state) {
  return {
    separationData: state.dashboard.separationData
  };
}

export default connect(mapStateToProps, {
})(Abstract);

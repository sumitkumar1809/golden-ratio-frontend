import { ContainerCustom } from '../../styles/Utils.styled';
import { SectionTitle } from '../moviegallery/MovieGallery.styled';
import { ProductionDetailsWrapper } from './ProductionDetails.styled';
import StarCast from './StarCast';
import moment from 'moment';

const ProductionDetails = ({ production, starcasts, movie }) => {
  return (
    <ContainerCustom>
      <ProductionDetailsWrapper>
        <SectionTitle>
          <h3>Production Details</h3>
        </SectionTitle>

        <table>
          <tbody>
            <tr>
              <th>Directed By</th>
              <td>{production?.directed_by}</td>
            </tr>
            <tr>
              <th>Written By</th>
              <td>{production?.written_by}</td>
            </tr>
            {starcasts.length > 0 && (
              <tr>
                <th>Star Cast</th>
                <td>
                  <StarCast starcasts={starcasts} />
                </td>
              </tr>
            )}

            <tr>
              <th>Release Date</th>
              <td>
                {movie?.releaseDate
                  ? moment(movie?.releaseDate).format('MMM DD, YYYY')
                  : ''}
              </td>
            </tr>
            <tr>
              <th>Country of Origin</th>
              <td>{production?.country_of_origin}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{production?.language}</td>
            </tr>
            <tr>
              <th>Run Time</th>
              <td>{production?.run_time}</td>
            </tr>
          </tbody>
        </table>
      </ProductionDetailsWrapper>
    </ContainerCustom>
  );
};

export default ProductionDetails;

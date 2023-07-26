import React from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import { SectionTitle } from '../moviegallery/MovieGallery.styled';
import { CastCrewWrapper, CastTeam, CastTeamHolder } from './CastCrew.styled';

const CastCrew = ({
  seriescasts,
  producers,
  musicers,
  cinemotograpies,
  filmeditors,
  artdirectors,
}) => {
  return (
    <ContainerCustom>
      <CastCrewWrapper>
        <SectionTitle>
          <h3>Full Cast and Crew</h3>
        </SectionTitle>
        {seriescasts.length > 0 && (
          <>
            <h1>Cast</h1>
            <CastTeamHolder>
              {seriescasts.map(({ _id, character, season, cast }) => (
                <CastTeam key={_id}>
                  <div>
                    {/* <img src={cast?.image} alt='' /> */}
                    <span
                      className='image'
                      style={{ backgroundImage: `url(${cast?.image})` }}></span>
                  </div>
                  <div>
                    <h3>{cast?.name}</h3>
                    <p>
                      {character != '' &&
                      character != undefined &&
                      character != 'undefined'
                        ? character
                        : ''}
                    </p>
                    <span>
                      {season &&
                        season !== 'undefined' &&
                        season !== '1' &&
                        `( ${season} )`}
                    </span>
                  </div>
                </CastTeam>
              ))}
            </CastTeamHolder>
          </>
        )}

        {producers.length > 0 && (
          <>
            <h2> Produced By</h2>

            <table>
              {producers.map(({ _id, name, designation, season }) => (
                <tr key={_id}>
                  <td>
                    {designation}
                    {season &&
                      season !== 'undefined' &&
                      season !== '1' &&
                      `( ${season} )`}
                  </td>
                  <th>{name}</th>
                </tr>
              ))}
            </table>
          </>
        )}

        {musicers.length > 0 && (
          <>
            <h2> Music by</h2>

            <table>
              {musicers.map(({ _id, name, designation, season }) => (
                <tr key={_id}>
                  <td>
                    {designation}
                    {season &&
                      season !== 'undefined' &&
                      season !== '1' &&
                      `( ${season} )`}
                  </td>
                  <th>{name}</th>
                </tr>
              ))}
            </table>
          </>
        )}

        {cinemotograpies.length > 0 && (
          <>
            <h2> Cinematography by</h2>

            <table>
              {cinemotograpies.map(({ _id, name, designation, season }) => (
                <tr key={_id}>
                  <td>
                    {designation}
                    {season &&
                      season !== 'undefined' &&
                      season !== '1' &&
                      `( ${season} )`}
                  </td>
                  <th>{name}</th>
                </tr>
              ))}
            </table>
          </>
        )}

        {filmeditors.length > 0 && (
          <>
            <h2> Film Editing by</h2>

            <table>
              {filmeditors.map(({ _id, name, designation, season }) => (
                <tr key={_id}>
                  <td>
                    {designation}
                    {season &&
                      season !== 'undefined' &&
                      season !== '1' &&
                      `( ${season} )`}
                  </td>
                  <th>{name}</th>
                </tr>
              ))}
            </table>
          </>
        )}

        {artdirectors.length > 0 && (
          <>
            <h2> Art Direction by</h2>

            <table>
              {artdirectors.map(({ _id, name, designation, season }) => (
                <tr key={_id}>
                  <td>
                    {designation}
                    {season &&
                      season !== 'undefined' &&
                      season !== '1' &&
                      `( ${season} )`}
                  </td>
                  <th>{name}</th>
                </tr>
              ))}
            </table>
          </>
        )}
      </CastCrewWrapper>
    </ContainerCustom>
  );
};

export default CastCrew;

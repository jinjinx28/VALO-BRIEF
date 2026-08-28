import { httpClient } from './httpClient';
import { ENDPOINTS } from './endpoints';
import { withFallback } from './withFallback';
import { predictionMock } from '../mocks/prediction.mock';

export function fetchPrediction(teamTag) {
  return withFallback(
    () => httpClient.get(ENDPOINTS.prediction(teamTag)),
    predictionMock,
    'fetchPrediction'
  );
}

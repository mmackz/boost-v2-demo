'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BoostWithEvent } from '@/types/boosts';
import { normalizeArrayLikeObject } from '@/utils';

interface Boost {
  boosts: BoostWithEvent[];
  boostCount: number;
}

const fetchBoosts = async (): Promise<Boost> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/boosts`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function BoostList() {
  const { data: boostObject, isLoading, error } = useQuery<Boost, Error>({
    queryKey: ['boosts'],
    queryFn: fetchBoosts,
  });

  if (isLoading) return <div>Loading boosts...</div>;
  if (error) return <div>Error fetching boosts: {error.message}</div>;

  const boosts = boostObject?.boosts

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Boosts</h2>
      <ul>
        {boosts?.sort((a, b) => a.Boost.id.localeCompare(b.Boost.id)).map(({ Boost, BoostCreatedEvent }) => (
          <li key={Boost.id} className="mb-4 p-4 bg-white rounded-lg">
            <p>Boost ID: {Boost.id}</p>

            <h3 className="text-lg font-semibold mt-2">Action Steps</h3>

            <p>Action Steps: {normalizeArrayLike(Boost.actionSteps).length}</p>
            {normalizeArrayLike(Boost.actionSteps).map((actionStep, index) => (
              <div key={index}>
                <p>Action Step {index}</p>
                <p>Action type: {actionStep.actionType}</p>
                <p>Target Contract: {actionStep.targetContract}</p>
                <p>Signature: {actionStep.signature}</p>
                <p>Signature Name: {actionStep.signatureName}</p>
                <p>Signature Type: {actionStep.signatureType}</p>
              </div>
            ))}

            <h3 className="text-lg font-semibold mt-2">Incentives</h3>

            {normalizeArrayLike(Boost.incentives).map((incentive, index) => (
              <div key={index}>
                <p>Incentive {index}</p>
                <p>Asset: {incentive.asset}</p>
                <p>Limit: {incentive.limit}</p>
                <p>Reward: {incentive.reward}</p>
                <p>Strategy: {incentive.strategy}</p>
                <p>Type: {incentive.type}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React, { FC } from 'react'
import cn from 'classnames'
import { SkeletonProps } from './Skeleton.d'
import s from './Skeleton.module.css'

const Skeleton: FC<SkeletonProps> = ({
  className,
  width,
  height,
  count = 1,
  color = 'rgb(243, 244, 246)',
}) => {
  const skeletons = new Array(count).fill(null).map((_, i) => (
    <div
      key={i}
      style={{
        backgroundColor: color,
        width: width || '100%',
        height: height || 'auto',
      }}
      className={cn(
        s['skeleton-transition'],
        ' rounded inline-block',
        {
          'mb-2': count > 1 && i !== count - 1,
        },
        className
      )}
    >
      &nbsp;
    </div>
  ))

  return <>{skeletons}</>
}

export default React.memo(Skeleton)

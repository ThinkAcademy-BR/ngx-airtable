/**
 * Created by bohoffi on 02.06.2017.
 */
import 'rxjs/add/operator/share';

import {Link} from '../interfaces';
import {Base} from '../node-port/base';

export const _extendLinked = (record: any, links: Link[], base: Base): any => {
  links.forEach((link: Link) => {
    record[link.linkSelector] = base
      .table(link.target)
      .select({
        filterByFormula: link.linkFilter(record)
      })
      .all()
      .share();
  });

  return record;
};

import dayjs from "dayjs";
import _ from "lodash";

export function technologyByProject({ period, technologies }, unit = "days") {
  return technologies.reduce(
    (byTechnology, technology) => ({
      ...byTechnology,
      [technology]: dayjs(period[1], "YYYY-MM-DD").diff(
        dayjs(period[0], "YYYY-MM-DD"),
        unit
      ),
    }),
    {}
  );
}

export function technologyBySite({ projects }, unit = "days") {
  return projects.reduce((bySite, project) => {
    const technologies = technologyByProject(project, unit);
    return Object.keys(technologies).reduce(
      (byProject, technology) => ({
        ...byProject,
        [technology]: Math.max(
          technologies[technology] || 0,
          byProject[technology] || 0
        ),
      }),
      bySite
    );
  }, {});
}

export function technologyByTotal(experience, unit = "years") {
  const unitToDays = {
    years: 365,
    quarters: 90,
    months: 30,
    weeks: 7,
    days: 7 / 5,
    hours: 7 / 40,
  };
  return _(experience).reduce(
    (byTotal, { site }) =>
      _(technologyBySite(site, "days"))
        .mapValues((time) => time / unitToDays[unit])
        .reduce(
          (bySite, time, technology) => ({
            ...bySite,
            [technology]: _.round((time || 0) + (bySite[technology] || 0), 1),
          }),
          byTotal
        ),
    {}
  );
}

export function techonologyByTime(experience, unit = "years") {
  const technologies = technologyByTotal(experience, unit);
  return Object.keys(technologies)
    .map((technology) => ({
      technology,
      time: technologies[technology],
    }))
    .sort((a, b) => b.time - a.time);
}

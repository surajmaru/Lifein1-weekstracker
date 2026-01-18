export const LIFE_YEARS = 76;
export const WEEKS_PER_YEAR = 52;
export const TOTAL_WEEKS = LIFE_YEARS * WEEKS_PER_YEAR;

export function weeksLived(dob){
    const birth = new Date(dob);
    const now = new Date();
    return Math.floor((now - birth) / (1000 * 60 * 60 * 24 * 7));
}

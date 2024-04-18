from itertools import cycle
import pulp


class Courses:
    def __init__(self, course_list: list[dict], completed_courses: list[str]) -> None:
        """
        Initialize the courses class
        Assumes you are taking 4 math courses a term
        Creates a list of n empty lists, where n is the num_of_terms

        Args:
            course_list: list of dictionaries, where each dictionary represents
            a course and is of the following format
            {"course_name": str, "course_diff": int, course_prereq: list[str]}

            completed_courses: list of strings that are the names of the already
            completed courses

        Retruns:
            None
        """
        self.course_list = course_list
        self.completed_courses = completed_courses
        self.num_of_terms = int(len(course_list) / 3)  # TODO: figure out how to deterine the length of the term
        self.terms = [[{"courses_taken": self.completed_courses, "current_courses": []}] for _ in range(self.num_of_terms)]
        self.model = pulp.LpProblem("Course_Scheduling", pulp.LpMinimize)

    def print_course(self, course):
        """
        Takes in a course dictionary and prints all of its contents

        Args:
            course: dict: {"course_name": str, "course_diff": int, course_prereq: list[str]}

        Returns:
            None
        """
        print(f"\nCourse Name: {course['course_name']}")
        print(f"Course Difficulty: {course['course_diff']}%")
        print("Course Pre-Requisites: ")
        if not course["course_prereq"]:
            print("None")
        else:
            for pre_req in course["course_prereq"]:
                print(f"{pre_req}, ")

    def pretty_courses(self):
        """
        Prints all of the courses along with their pre-requisites,
        their difficulty, from the course_list

        Args:
            None

        Returns:
            None
        """
        for course in self.course_list:
            self.print_course(course)

    def pretty_term(self):
        """
        Prints out the courses that have been assigned to
        each individual term

        Args:
            None

        Returns:
            None
        """
        if not self.terms:
            print("No courses assigned yet.")
            return

        n = 1

        for term_list in self.terms:
            print(f"Term {n}")
            n += 1
            for term in term_list:
                for course in term["current_courses"]:
                    self.print_course(course)

    def add_course_taken(self, term_num: int, course: str):
        """
        Adds course to the courses taken value of the term dictionary
        for the terms with index > term

        Args:
            term: int: the term throughout which the course is being taken
            course: str: the name of the course

        Returns:
            None
        """

        if self.term:
            for term in range(term_num + 1, self.num_of_terms + 1):
                self.terms["courses_taken"].append(course)

    def is_prereq_being_taken(self, course, term):
        """
        Check if any prerequisites of the given course are currently being taken in any term.

        Args:
            course (dict): A course dictionary containing 'course_name', 'course_diff', and 'course_prereq'.
            terms (list): List of terms where each term is a list of dictionaries with keys 'courses_taken' and 'current_courses'.

        Returns:
            bool: True if any prerequisite is being taken, otherwise False.
        """

        prerequesites = course["course_prereq"]

        for course in term["current_courses"]:
            if course in prerequesites:
                return True

        return False

    def prereq_satisfied(self, course, term):
        """
        Checks if all of the  courses prerequisites have been taken

        Args:
            course (dict): A course dictionary containing 'course_name', 'course_diff', and 'course_prereq'.
            terms (list): List of terms where each term is a list of dictionaries with keys 'courses_taken' and 'current_courses'.

        Returns:
            bool: True if all of the prerequisites are satisfied, False otherwise
        """
        prerequisites = course["course_prereq"]

        for course in prerequisites:
            if course not in term["courses_taken"]:
                return False

        return True

    def optimize_courses(self):
        sorted_courses = sorted(
            self.courses, key=lambda course: course["course_diff"], reverse=True
        )

        for term in cycle(self.terms):
            for course in sorted_courses:
                if self.is_prereq_being_taken(
                    course, term
                ) or not self.prereq_satisfied(course, term):
                    continue

        print(len(sorted_courses))


course_list = [
    {"course_name": "MATH135", "course_diff": 90, "course_prereq": []},
    {"course_name": "MATH137", "course_diff": 85, "course_prereq": []},
    {"course_name": "CS135", "course_diff": 56, "course_prereq": []},
    {"course_name": "MATH136", "course_diff": 68, "course_prereq": ["MATH135"]},
    {"course_name": "MATH138", "course_diff": 79, "course_prereq": ["MATH137"]},
    {"course_name": "CS136", "course_diff": 68, "course_prereq": ["CS137"]},
    {"course_name": "MATH235", "course_diff": 89, "course_prereq": ["MATH136"]},
    {"course_name": "MATH237", "course_diff": 45, "course_prereq": ["MATH138"]},
    {"course_name": "STAT230", "course_diff": 34, "course_prereq": []},
]

completed_courses = []

course_manager = Courses(course_list=course_list, completed_courses=completed_courses)

course_manager.pretty_courses()

course_manager.pretty_term()




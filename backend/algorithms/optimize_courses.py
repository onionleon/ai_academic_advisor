

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
        self.num_of_terms = len(course_list) / 4
        self.terms = [[] for _ in range(self.num_of_terms)]

    def print_course(course):
        """
        Takes in a course dictionary and prints all of its contents

        Args:
            course: dict: {"course_name": str, "course_diff": int, course_prereq: list[str]}

        Returns: 
            None
        """
        print(f"Course Name: {course["course_name"]}\n")
        print(f"Course Difficulty: {course["course_diff"]}%\n")
        print("Course Pre-Requisites: ")
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
        if not self.terms[0]:
            print("No courses assigned yet.")
            return
        
        for term in self.terms:
            for course in term:
                self.print_course(course)

    
    def optimize_courses(self):
        
        sorted_courses = sorted(self.courses, key=lambda course: course['course_diff'], reverse=True)

        print(len(sorted_courses))

